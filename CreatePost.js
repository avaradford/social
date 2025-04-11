import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

function CreatePost({ account, postManagerContract }) {
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState({
        communityId: '',
        content: '',
        mediaHash: ''
    });
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const loadCommunities = async () => {
            if (postManagerContract) {
                try {
                    const communityCount = await postManagerContract.methods.communityCount().call();
                    let communitiesArray = [];

                    for (let i = 1; i <= communityCount; i++) {
                        const community = await postManagerContract.methods.communities(i).call();
                        if (community.isActive) {
                            communitiesArray.push(community);
                        }
                    }

                    setCommunities(communitiesArray);

                    // Set default community if available
                    if (communitiesArray.length > 0) {
                        setPostData(prev => ({
                            ...prev,
                            communityId: communitiesArray[0].id
                        }));
                    }

                    setLoading(false);
                } catch (error) {
                    console.error("Error loading communities:", error);
                }
            }
        };

        loadCommunities();
    }, [postManagerContract]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!postData.communityId) {
            alert('Please select a community.');
            return;
        }

        if (!postData.content.trim()) {
            alert('Please enter some content for your post.');
            return;
        }

        try {
            await postManagerContract.methods.createPost(
                postData.content,
                postData.mediaHash || '', // Empty string if no media
                postData.communityId
            ).send({ from: account });

            alert('Post created successfully!');
            navigate(`/community/${postData.communityId}`);
        } catch (error) {
            console.error("Error creating post:", error);
            alert('Failed to create post. Please try again.');
        }
    };

    const simulateMediaUpload = (file) => {
        setIsUploading(true);

        // Simulate uploading to IPFS
        setTimeout(() => {
            // Generate a fake IPFS hash
            const fakeIpfsHash = 'Qm' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            setPostData(prev => ({
                ...prev,
                mediaHash: fakeIpfsHash
            }));

            setIsUploading(false);
        }, 2000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            simulateMediaUpload(file);
        }
    };

    if (loading) {
        return <div className="loading">Loading communities...</div>;
    }

    return (
        <div className="create-post-page">
            <h1>Create New Post</h1>

            <form className="create-post-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Select Community</label>
                    {communities.length === 0 ? (
                        <div className="no-communities">
                            No communities available. Please create or join a community first.
                        </div>
                    ) : (
                        <select
                            value={postData.communityId}
                            onChange={(e) => setPostData({...postData, communityId: e.target.value})}
                            required
                        >
                            <option value="" disabled>Select a community</option>
                            {communities.map(community => (
                                <option key={community.id} value={community.id}>
                                    {community.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className="form-group">
                    <label>Post Content</label>
                    <textarea
                        value={postData.content}
                        onChange={(e) => setPostData({...postData, content: e.target.value})}
                        placeholder="What would you like to share?"
                        rows={6}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Add Media (Optional)</label>
                    <div className="file-upload-container">
                        <input
                            type="file"
                            id="media-upload"
                            onChange={handleFileChange}
                            accept="image/*,video/*"
                        />
                        <label htmlFor="media-upload" className="file-upload-button">
                            {isUploading ? 'Uploading...' : 'Choose File'}
                        </label>

                        {postData.mediaHash && (
                            <div className="media-preview">
                                <p>Media uploaded to IPFS</p>
                                <p className="ipfs-hash">Hash: {postData.mediaHash}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label>Manual IPFS Hash (Optional)</label>
                    <input
                        type="text"
                        value={postData.mediaHash}
                        onChange={(e) => setPostData({...postData, mediaHash: e.target.value})}
                        placeholder="Enter IPFS hash for media content"
                    />
                    <p className="help-text">
                        If you already have media on IPFS, you can enter the hash directly.
                    </p>
                </div>

                <div className="form-actions">
                    <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                    <button type="submit" className="submit-button" disabled={isUploading || communities.length === 0}>
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;