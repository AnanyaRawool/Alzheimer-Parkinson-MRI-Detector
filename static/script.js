document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('upload-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
      resultDiv.innerText = "Please select a file.";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/predict", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      resultDiv.innerText = data.prediction
        ? `Prediction: ${data.prediction}`
        : `Error: ${data.error}`;
    } catch (error) {
      resultDiv.innerText = `Request failed: ${error.message}`;
    }
  });
});
