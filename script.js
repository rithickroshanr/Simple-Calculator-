    let OutputScreen=document.getElementById("op");
            function display(num){
                OutputScreen.value+=num;
            }
            function Calculate(){
                try{
                    OutputScreen.value=eval(OutputScreen.value);
                }
            catch(err){
                alert("Syntax Error")
            }
        }
            function Clear(){
                OutputScreen.value=" ";
            }
            function del(){
                OutputScreen.value=OutputScreen.value.slice(0,-1);
            }
            