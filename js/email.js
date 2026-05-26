<!-- EMAILJS -->
          <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
          <script>
            emailjs.init("6mnP28f-fw1y2cI3M");

            // Activar campo anti‑bot JS
            document.getElementById("human-check").value = "ok";

            function sendEmailJS() {
              const form = document.getElementById("contact-form");
              const msg = document.getElementById("form-message");
              const submitBtn = form.querySelector('button[type="submit"]');

              // Honeypot
              if (form.website.value !== "") return;

              // JS anti-bot
              if (form["human_check"].value !== "ok") return;

              // Checkbox humano
              if (!document.getElementById("human-verify").checked) {
                msg.textContent = "Debes confirmar que eres humano.";
                msg.style.color = "red";
                return;
              }

              submitBtn.disabled = true;
              submitBtn.textContent = "Enviando...";
              msg.textContent = "";

              emailjs.sendForm("service_1yyeych", "template_wa8llkc", form)
                .then(() => {
                  msg.textContent = "Mensaje enviado correctamente. ¡Gracias!";
                  msg.style.color = "green";
                  form.reset();
                  submitBtn.disabled = false;
                  submitBtn.textContent = "Enviar";

                  // Reactivar campo anti‑bot
                  document.getElementById("human-check").value = "ok";
                })
                .catch(() => {
                  msg.textContent = "Ha ocurrido un error al enviar el mensaje.";
                  msg.style.color = "red";
                  submitBtn.disabled = false;
                  submitBtn.textContent = "Enviar";
                });
            }
          </script>