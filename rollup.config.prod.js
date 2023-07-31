import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

function dateFormat() {
    const currentDate = new Date();

    const year = currentDate.getFullYear().toString().padStart(4, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  
    return `${year}${month}${day}-${hours}${minutes}`;
}

export default {
    input: "./build/main.js",
    output: [
        {
            file: `./example/src/tools/misoh-${dateFormat()}.bundle.minify.js`,
            format: "es"
        },
        {
            file: `./dist/bundle&minify/misoh-${dateFormat()}.bundle.minify.js`,
            format: "es"
        }
    ],
    plugins: [
        nodeResolve(), 
        commonjs(),
        terser({
            mangle: {
                properties: false,
                reserved: ['misoh']
            }
        })
    ]
}