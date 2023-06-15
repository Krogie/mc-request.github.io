function checkServerStatus() {
  const serverInput = document.getElementById('serverInput');
  const statusContainer = document.getElementById('statusContainer');
  const statusTitle = document.getElementById('statusTitle');
  const statusText = document.getElementById('statusText');
  const playerCount = document.getElementById('playerCount');

  const ipOrDomain = serverInput.value.trim();
  if (ipOrDomain === '') {
    return;
  }

  const url = `https://api.mcsrvstat.us/2/${ipOrDomain}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      statusContainer.style.display = 'block';
      if (data.online) {
        statusTitle.textContent = 'Server is Online';
        statusTitle.className = 'status-online';
        statusText.innerHTML = `Players Online: ${data.players.online} / ${data.players.max}`;
      } else {
        statusTitle.textContent = 'Server is Offline';
        statusTitle.className = 'status-offline';
        statusText.innerHTML = '';
      }
    })
    .catch(error => {
      console.error('Error checking server status:', error);
      statusContainer.style.display = 'block';
      statusTitle.textContent = 'Error';
      statusTitle.className = 'status-offline';
      statusText.innerHTML = '';
    });
}
