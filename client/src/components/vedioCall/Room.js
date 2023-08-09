import React from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";

const Room = () =>{
    const {roomID}=useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 99666658;
         const serverSecret = "1529d795083d5eb9d361b696eb9c5e99";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"doctor");
   
   
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
            {
              name: 'Copy link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
           scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall GroupCall].
           },
         });
   
   
     };

    return(
        <div ref={myMeeting}>
          kkkkk
        </div>
    );
}

export default Room;