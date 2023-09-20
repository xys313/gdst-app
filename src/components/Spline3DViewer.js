import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import * as THREE from 'three';
// import { Application } from '../img/coin3D/runtime.js';
// import '../img/coin3D/runtime'


export default function Spline3DViewer() {

    const [backgroundColor, setBackgroundColor] = useState('pink');
    const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 5 });
    useEffect(() => {
        // 创建一个Three.js场景
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('spline-container').appendChild(renderer.domElement);

        // 引入Spline运行时脚本
        import('../img/coin3D/runtime').then((splineRuntime) => {
            // 引入Spline项目文件
            import('../img/coin3D/scene.splinecode').then((splineData) => {
                // 初始化Spline 3D模型
                console.log(splineData)
                const  {loadScene}  = Application.default;
                console.log(loadScene)
                const sceneData = splineData.default;

                // 使用loadScene方法加载Spline场景
                loadScene(scene, sceneData);

                // 设置相机位置
                camera.position.set(0, 0, 5);

                // 其他初始化和渲染逻辑
                const animate = () => {
                    requestAnimationFrame(animate);
                    // 更新模型或进行动画
                    renderer.render(scene, camera);
                };
                animate();
            });
        });
    }, []);
    // useEffect(() => {
    //     // 添加一个监听器，以在加载完成后调整 iframe 的高度
    //     const iframe = document.getElementById('spline-iframe');
    //     iframe.addEventListener('load', () => {
    //         iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
    //     });
    // }, []);

    return (
        <div id={'spline-container'}>
            <iframe
                id="spline-iframe"
                src="../img/coin3D/index.html" // 替换为实际的路径
                title="Spline 3D Viewer"
                frameBorder="0"
                width="100%"
                height="600px" // 初始高度，可以根据需要调整
            />
        </div>
    );
}
