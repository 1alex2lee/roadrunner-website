// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency

import "../../node_modules/popper.js/dist/popper.min.js";
import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";
import "../../node_modules/jquery/dist/jquery.min.js";

$(document).ready(function () {
   $("#signup_button").on("click", function (e) {
        e.preventDefault();
        $.post(
            "/request",
            {
                name: "viSion",
                designation: "Professional gamer",
            },
            function (data, status) {
                console.log(data);
            }
        );
    });
});
    //     var email = document.getElementById("input_email").value;
    //     var name = document.getElementById("input_name").value;
    //     var is_email = String(email)
    //     .toLowerCase()
    //     .match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );

    //     if (is_email) {
    //         console.log(name, email, " is valid");
    //         $.ajax({
    //             type: "POST",
    //             url: "/signup",
    //             data: {name: name, email: email},
    //             success: function(){console.log("success")},
    //             dataType: "json",
    //         });
    //     } else {
    //         console.log("not email");
    //         document.getElementById("invalid_email_message").hidden = false;
    //     }
    // })
// })