function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 complete");
        callback();
    }, 1000);
}

// 🚨 Callback Hell (Nested Callbacks)
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed!");
            }); 
        });
    });
});
