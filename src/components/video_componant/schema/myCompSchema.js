import React, { useRef, useState } from 'react';
import RecordRTC from 'recordrtc';

const VideoStreaming = () => {
  const [text, setText] = useState("Your text goes here.");
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const video = document.getElementById('scrolling-text-container');
 
  async function captureMediaDevices(mediaConstraints = {
    video: {
      width: 1280,
      height: 720
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100
    }
  }) {
  const stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
  
  video.src = null;
  video.srcObject = stream;
  video.muted = true;
  
  return stream;
}
let recorder = null;
var strFile = null;
var webcamblob = null;
function stopRecording() {
    recorder.stream.getTracks().forEach(track => track.stop());
   }
 
   async function recordVideo() {
     
     const stream = await captureMediaDevices();
     
     video.src = null;
     video.srcObject = stream;
     video.muted = true;
     video.autoplay = true;
     recorder = new MediaRecorder(stream);
     let chunks = [];
   
     recorder.ondataavailable = event => {
       if (event.data.size > 0) {
         chunks.push(event.data);
       }
     }
     
     recorder.onstop = () => {
       const blob = new Blob(chunks, {
         type: 'video/webm'
       })
       chunks = [];
       webcamblob = blob;
       const blobUrl = URL.createObjectURL(blob);
       strFile = blobUrl;
 
      }
 
     recorder.start(200);
   }
 
   const previewRecording = () => {
     video.srcObject = null;
     video.src = strFile;
     video.muted = false;
     video.autoplay = true;
   }
 
  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <div>
      <button onClick={recordVideo}>Record video</button>
        <button onClick={stopRecording}>Stop recording</button>
        <button onClick={previewRecording}>Replay</button>
      </div>
      <div>
        <div className="scrolling-text-container" ref={containerRef}>
          <div className="scrolling-text">{text}</div>
        </div>
        <center>
              <video id='video' className="Display-video" width="800" height="600" autoplay muted></video>
            </center>
      </div>
    </div>
  );
};

export default VideoStreaming;
