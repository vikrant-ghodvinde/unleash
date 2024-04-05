import React, { useState, useRef } from 'react';

const ScrollingText = () => {
  const [text, setText] = useState("Your scrolling text goes here.");
  const [isRecording, setIsRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const startRecording = async () => {
    setIsRecording(true);
    startTextScrolling();
    captureCanvasFrames();
  };

  const stopRecording = () => {
    setIsRecording(false);
    cancelAnimationFrame(animationFrameRef.current);
    captureCanvasFrames(true);
  };

  const exportAsVideo = async () => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      const canvasStream = canvasRef.current.captureStream(30); // 30 FPS
      const mediaRecorder = new MediaRecorder(canvasStream, { mimeType: 'video/webm' });
      const chunks = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(chunks, { type: 'video/webm' });
        setVideoBlob(videoBlob);
      };
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 3000); // Stop recording after 3 seconds (adjust as needed)
    }
  };

  const startTextScrolling = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const scrollSpeed = 2;
    let x = canvasWidth;

    function drawFrame() {
      canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
      canvasCtx.fillText(text, x, canvasHeight / 2);
      x -= scrollSpeed;
      if (x < -canvasCtx.measureText(text).width) {
        x = canvasWidth;
      }
      if (isRecording) {
        animationFrameRef.current = requestAnimationFrame(drawFrame);
      }
    }
    canvasCtx.font = '24px Arial';
    canvasCtx.fillStyle = 'white';
    canvasCtx.textBaseline = 'middle';
    canvasCtx.textAlign = 'left';
    drawFrame();
  };

  const captureCanvasFrames = (stop) => {
    if (stop) {
      canvasRef.current = null;
    } else {
      canvasRef.current = document.createElement('canvas');
      canvasRef.current.width = 640; // Set your desired canvas width
      canvasRef.current.height = 360; // Set your desired canvas height
      startTextScrolling();
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
        <button onClick={exportAsVideo}>Export as Video</button>
      </div>
      <div className="scrolling-text-container">
        <canvas
          ref={canvasRef}
          style={{ display: isRecording ? 'block' : 'none' }}
        />
        <div className="scrolling-text">{text}</div>
      </div>
      {videoBlob && (
        <a
          href={URL.createObjectURL(videoBlob)}
          download="scrolling_text_video.webm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Video
        </a>
      )}
    </div>
  );
};

export default ScrollingText;
