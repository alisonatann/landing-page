 <!-- JavaScript Interactions -->
    
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            toastMsg.textContent = message;
            
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
        }

        function copiarEmail() {
            const email = "alisonatann@gmail.com";
            const textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showToast("E-mail copiado com sucesso!");
            } catch (err) {
                showToast("Erro ao copiar e-mail.");
            }
            document.body.removeChild(textarea);
        }
         
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkBg: '#0b0d10',
                        cardBg: 'rgba(15, 23, 42, 0.75)',
                        neonCyan: '#00f0ff',
                        neonBlue: '#3b82f6',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    boxShadow: {
                        'neon': '0 0 25px rgba(0, 240, 255, 0.3)',
                        'neon-hover': '0 0 35px rgba(0, 240, 255, 0.5)',
                    }
                }
            }
        }
   