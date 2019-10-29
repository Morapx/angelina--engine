const canvas = document.getElementById('glcanvas');

const main = ()=>{
    const gl = canvas.getContext('webgl');

    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //el paradigma mas basica en los shadders es el lambert que es el tipo mas simpple de iluminacion //

}

window.onload = main;