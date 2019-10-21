var friendData = require("../data/friends");

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData)
    });    
    app.post("/api/friends", (req, res) => {      
        console.log("posted");
        friendData.push(req.body);
        res.json(true);
    });
    app.delete("/api/friends", (req, res) => {
        friendData = [];
    })
}

