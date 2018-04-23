var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;



var Connect2 = createReactClass({
  render: function() {
    return (
     <div>
         <h3>On your computer, look at your available wifi networks and look for <b>vitalhub</b>. If it is there, connect to vitalhub. The password is <b>hubadmin</b>.
         </h3>
         <h3> Make sure to log out of the portal on your computer if you are already logged in.
         </h3>
         <h3> Next on your computer, go to <a href="http://192.168.10.1.com" target="_blank"
         >http://192.168.10.1.com</a> and wait for it to load.
         </h3>
         <h3>Once it has been loaded, you should be taken to a configuration screen. The is screen will allow you to setup the wifi connection that the hub will use.
         </h3>
         <h3>Pick from the list of available wifi networks on the site, and click Connect. If the network require a password, it will ask you for that in the prompt.</h3>

         <h3>During the connection process, you may be disconnected from the hub. If that happens, wait about a minute and then connect to the vitalhub again.</h3>

         <h3> Once the cnnection is finished, your should see a Connection Successful popup or you will see text at the top of the screen: "Currently connect to: ". If you see this, then you are good. If you are still not connected or received an error, chec the password and try again.
         </h3>

         <h3>Once the hub is connected to your network, then you can switch back to your normal wifi connection.
         </h3>

         <h3>The hub will detect your watch. You are now ready to use your VitalBand!
         </h3>
         
     </div>
        
    );
  }
});

module.exports = Connect2;