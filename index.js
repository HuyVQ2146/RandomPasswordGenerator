function submit(){

    function generatePass(length, lowercase, uppercase, num, sym){
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numChars = "0123456789";
        const symChars = "!@#$%^&*()_+=-[]{}|;:,.<>/?";

        let allowedChars = '';
        let pass = '';

        allowedChars += lowercase ?  lowerChars : ''; 
        allowedChars += uppercase ?  upperChars : '';
        allowedChars += num ?  numChars : '';
        allowedChars += sym ? symChars : '';

        if(length <= 0){
            return [false, 'Password length must be greater than 0.'];
        }
        if (allowedChars.length === 0){
            return [false, 'Aleast 1 set of characters needs to be selected.'];
        }

        for (let i = 0; i < length; i++){
            const randomIdx = Math.floor(Math.random() * allowedChars.length);
            pass += allowedChars[randomIdx];
        }

        return [true, pass];
    }



    const passLen = document.getElementById('len').value;
    const includeLower = document.getElementById('lower').checked;
    const includeUpper = document.getElementById('upper').checked;
    const includeNum = document.getElementById('number').checked;
    const includeSymbols = document.getElementById('special').checked;

    const pass = generatePass(passLen, 
                            includeLower, 
                            includeUpper, 
                            includeNum, 
                            includeSymbols);

    console.log(`Generated password: ${pass[1]}`);
    
    const preRes = document.getElementById('preRes');
    const res = document.getElementById('res');
    const false_res = document.getElementById('false');

    if (pass[0]){
        preRes.textContent = `Generated password: `;
        res.textContent = `${pass[1]}`;
        false_res.textContent = ``;
    }
    else{
        preRes.textContent = ``;
        res.textContent = ``;
        false_res.textContent = `${pass[1]}`;
    }


}
