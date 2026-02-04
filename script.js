async function uploadVideo() {
  const file = document.getElementById("videoUpload").files[0];
  const formData = new FormData();
  formData.append("video", file);

  const response = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  document.getElementById("results").innerHTML = `
    <h3>Strengths</h3>${data.strengths}
    <h3>Mistakes</h3>${data.mistakes}
    <h3>Tips</h3>${data.tips}
    <h3>Drills</h3>${data.youtube_videos}
  `;
}
