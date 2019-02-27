var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name:"Cloud's Rest",
        image: "https://c1.staticflickr.com/1/174/451450946_cb742b3b30_z.jpg?zz=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio id ipsum placerat tempus. Etiam ante eros, porttitor vitae tincidunt ac, sodales vitae elit. Nulla pretium lorem condimentum, molestie velit vel, ornare nunc. Cras posuere justo id mauris faucibus dapibus. Sed semper urna vel dui pulvinar, at malesuada lectus dignissim."
    },
    {
        name:"Canyon Hill",
        image: "https://c1.staticflickr.com/9/8763/17651658755_395d818185_z.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio id ipsum placerat tempus. Etiam ante eros, porttitor vitae tincidunt ac, sodales vitae elit. Nulla pretium lorem condimentum, molestie velit vel, ornare nunc. Cras posuere justo id mauris faucibus dapibus. Sed semper urna vel dui pulvinar, at malesuada lectus dignissim."
    },
    {
        name:"Sephora Beach",
        image: "https://c1.staticflickr.com/4/3872/14435096036_39db8f04bc_z.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio id ipsum placerat tempus. Etiam ante eros, porttitor vitae tincidunt ac, sodales vitae elit. Nulla pretium lorem condimentum, molestie velit vel, ornare nunc. Cras posuere justo id mauris faucibus dapibus. Sed semper urna vel dui pulvinar, at malesuada lectus dignissim."
    }
    ]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
              if(err) {
                  console.log(err);
              } else {
                  console.log("added a campground");
                  // create a comment
                  Comment.create(
                      {
                          text: "This place is great, but I wish there was wifi",
                          author: "Homer"
                           
                      }, function(err, comment){
                          if(err){
                              console.log(err);
                          } else {
                              campground.comments.push(comment);
                              campground.save();
                              console.log("Created new comment");
                          }
                      });
              }
            });
        });
    });
    
    // add a few comments
}

module.exports = seedDB;

