export const mockCommunities = [
    {
        id: 1,
        name: "Computer Science",
        description: "For CS majors and anyone interested in programming, algorithms, and software development.",
        creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        memberCount: 124,
        isActive: true
    },
    {
        id: 2,
        name: "Blockchain and DeFi",
        description: "Discuss blockchain technology, cryptocurrencies, and decentralized finance applications.",
        creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        memberCount: 68,
        isActive: true
    },
    {
        id: 3,
        name: "Business Analytics",
        description: "Share insights about data analytics, business intelligence, and statistical analysis.",
        creator: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        memberCount: 95,
        isActive: true
    },
    {
        id: 4,
        name: "Finance",
        description: "Discussion about financial markets, investment strategies, and economic trends.",
        creator: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        memberCount: 142,
        isActive: true
    },
    {
        id: 5,
        name: "Marketing",
        description: "Share ideas about digital marketing, branding, and advertising campaigns.",
        creator: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        memberCount: 87,
        isActive: true
    }
];

// Mock data for posts
export const mockPosts = [
    {
        id: 1,
        author: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        content: "Just finished my blockchain assignment! Anyone interested in reviewing my smart contract design?",
        mediaHash: "",
        communityId: 2,
        timestamp: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
        upvotes: 15,
        downvotes: 2,
        isActive: true
    },
    {
        id: 2,
        author: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        content: "Looking for study partners for the upcoming Data Structures exam. Anyone interested?",
        mediaHash: "",
        communityId: 1,
        timestamp: Math.floor(Date.now() / 1000) - 7200, // 2 hours ago
        upvotes: 8,
        downvotes: 0,
        isActive: true
    },
    {
        id: 3,
        author: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        content: "I'm analyzing market trends for my finance class. Does anyone have access to historical data for the S&P 500?",
        mediaHash: "",
        communityId: 4,
        timestamp: Math.floor(Date.now() / 1000) - 14400, // 4 hours ago
        upvotes: 6,
        downvotes: 1,
        isActive: true
    },
    {
        id: 4,
        author: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        content: "Just created a DApp for trading meal swipes. Would love some feedback before I present it in class!",
        mediaHash: "",
        communityId: 2,
        timestamp: Math.floor(Date.now() / 1000) - 28800, // 8 hours ago
        upvotes: 24,
        downvotes: 3,
        isActive: true
    },
    {
        id: 5,
        author: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        content: "Has anyone taken Professor Johnson's Marketing Analytics course? How difficult is the final project?",
        mediaHash: "",
        communityId: 5,
        timestamp: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
        upvotes: 12,
        downvotes: 0,
        isActive: true
    }
];

// Mock data for marketplace items
export const mockMarketplaceItems = [
    {
        id: 1,
        seller: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        itemType: "mealswipe",
        quantity: 5,
        price: 2 * (10 ** 18), // 2 FalCoins per meal swipe
        isActive: true
    },
    {
        id: 2,
        seller: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        itemType: "textbook",
        quantity: 1,
        price: 15 * (10 ** 18), // 15 FalCoins
        isActive: true
    },
    {
        id: 3,
        seller: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        itemType: "falcoin",
        quantity: 50,
        price: 45 * (10 ** 18), // 45 FalCoins (selling at a discount)
        isActive: true
    },
    {
        id: 4,
        seller: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        itemType: "mealswipe",
        quantity: 2,
        price: 2.5 * (10 ** 18), // 2.5 FalCoins per meal swipe
        isActive: true
    },
    {
        id: 5,
        seller: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        itemType: "other",
        quantity: 1,
        price: 10 * (10 ** 18), // 10 FalCoins
        isActive: true
    }
];

// Mock data for events
export const mockEvents = [
    {
        id: 1,
        title: "Topics in Tech - Ryan Joyal",
        description: "Lost in Tech? How I Found My Way and You Can Too.",
        location: "Online Event",
        date: "2025-04-09",
        startTime: "14:00",
        endTime: "16:20",
        category: "academic",
        organizer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        attendees: 42,
        isAttending: false
    },
    {
        id: 2,
        title: "Falcon Fest Spring 2025",
        description: "Annual spring festival with music, food, and activities for all Bentley students.",
        location: "Student Center Lawn",
        date: "2025-04-15",
        startTime: "12:00",
        endTime: "20:00",
        category: "academic",
        organizer: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        attendees: 214,
        isAttending: true
    },
    {
        id: 3,
        title: "Health industires & Psych",
        description: "Dipping into health industries and psych careers.",
        location: "Collins Creative Corner",
        date: "2025-04-10",
        startTime: "18:00",
        endTime: "19:00",
        category: "career",
        organizer: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        attendees: 156,
        isAttending: false
    },
    {
        id: 4,
        title: "Bentley and Grandeis Networking Event",
        description: "The Bentley and Brandeis Networking Event is a collaborative gathering aimed at fostering connections between students and professionals from both universities. Scheduled for April 11, 2025, at 5:00 PM, the event will be held at Margaritas, 211 Moody St, Waltham, MA 02453. It's a great opportunity to expand your professional network, share ideas, and build relationships in a relaxed and engaging environment. Come and join us!",
        location: "211 Moody St, Waltham, MA 02453 (Margaritas)",
        date: "2025-04-08",
        startTime: "16:00",
        endTime: "18:00",
        category: "social",
        organizer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        attendees: 28,
        isAttending: true
    }
];

// Mock user data
export const mockUserProfile = {
    name: "Ava Radford",
    email: "aradford@falcon.bentley.edu",
    balance: 120 * (10 ** 18), // 120 FalCoins
    communities: [1, 2, 4],
    posts: [1, 4],
    events: [2, 4]
};

// Mock user transactions
export const mockTransactions = [
    {
        id: 1,
        type: "Meal Swipe Sold",
        amount: 5,
        price: 2.5,
        timestamp: Date.now() - 43200000, // 12 hours ago
        status: "completed"
    },
    {
        id: 2,
        type: "FalCoin Received",
        amount: 10,
        price: 1,
        timestamp: Date.now() - 129600000, // 1.5 days ago
        status: "completed"
    },
    {
        id: 3,
        type: "Textbook Purchase",
        amount: 1,
        price: 15,
        timestamp: Date.now() - 259200000, // 3 days ago
        status: "completed"
    }
];

// Helper function to simulate blockchain interactions with a delay
export const simulateBlockchainDelay = (callback, ms = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = callback();
            resolve(result);
        }, ms);
    });
};