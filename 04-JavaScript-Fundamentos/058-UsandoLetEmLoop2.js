const funcs = [];

for(let i = 0; i < 10; i++){
    funcs.push(
        function(){
            console.log(i);
        }
    );
};

funcs[0]()  // 0
funcs[1]()  // 1
funcs[2]()  // 2
funcs[9]()  // 9
