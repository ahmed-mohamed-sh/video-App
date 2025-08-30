import React, {useEffect,useRef} from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";
export const VideoPage = () => {
    const params = useParams();
    const { roomId } = params;
    const videoContainer = useRef(null);
    useEffect(() => {
        const appId = 446965906;
        const serverSecret = "15f41fe60046335d94498572820986e7";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "ahmed");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: videoContainer.current,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://localhost:5173/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
            showLeaveButton: true,
        });

    }, [roomId]);


  return (
    <div ref={videoContainer}>
    </div>
  );
};

export default VideoPage;
