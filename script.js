
      console.log("this is me");

      document.addEventListener("DOMContentLoaded", function () {
        const rootStyles = getComputedStyle(document.documentElement);
        const theme = document.getElementById("theme");

        if (theme) {
          const currentWhiteColor = rootStyles.getPropertyValue('--white').trim();
          const black = rootStyles.getPropertyValue('--black').trim();
          const second = rootStyles.getPropertyValue('--second').trim();
          const nav_gray = rootStyles.getPropertyValue('--nav_gray').trim();
          const footer = rootStyles.getPropertyValue('--footer').trim();
          let clicked = 0;

          theme.addEventListener("click", () => {
            if (clicked === 1) {
              clicked = 0;
            } else {
              clicked = 1;
            }
            document.documentElement.style.setProperty('--white', clicked === 1 ? '#1c1c1c' : '#fff');
            document.documentElement.style.setProperty('--second', clicked === 1 ? '#bd362f' : '#da9673');
            document.documentElement.style.setProperty('--footer', clicked === 1 ? '#2c5f14' : '#9e5c22a1');
            document.documentElement.style.setProperty('--black', clicked === 1 ? '#fff' : '#1c1c1c');
            document.documentElement.style.setProperty('--nav_gray', clicked === 1 ? '#fff' : '#b8b7b7');
          });
        } else {
          console.error("Element with ID 'theme' not found");
        }
      });