document.addEventListener('DOMContentLoaded', function() {
    const ageVerificationModal = document.getElementById('age-verification-modal');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const videoContainer = document.getElementById('video-container');

    yesBtn.addEventListener('click', function() {
        ageVerificationModal.style.display = 'none';
        videoContainer.style.display = 'flex';
    });

    noBtn.addEventListener('click', function() {
        alert('您由于不满18岁无法访问此内容');
        window.close();
    });
});