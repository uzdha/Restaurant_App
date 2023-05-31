const errorPage = (error) => {
  const body = document.querySelector('body');
  const errorPg = document.createElement('div');
  errorPg.setAttribute('class', 'error-page');
  body.innerHTML = '';
  errorPg.innerHTML = `
        <div class="error-page-content">
        <img src="images/error.webp" alt="errorImage">
            <div class="error-page-content-text">
                <div class="error-page-title">ERROR</div>
                <p class="error-page-message">${error}</p>
                <div class="error-page-desc">Your device is not connected to the internet. Please check your internet connection and try refreshing the page.</div>
                <p class="click-here">Please click on the reload button below to refresh the page.</p>
                <button onclick="window.location.reload()">Refresh</button>
            </div>
        </div>
    `;
  body.appendChild(errorPg);
};

export default errorPage;
