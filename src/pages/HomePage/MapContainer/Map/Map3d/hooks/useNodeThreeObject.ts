import { useCallback } from 'react';

import THREE, {
  Scene,
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  Group,
  TextureLoader,
  SpriteMaterial,
  Sprite,
  Cache,
  CircleGeometry,
  Texture,
  MeshBasicMaterial,
  DoubleSide,
  RepeatWrapping,
  NearestFilter,
  PlaneGeometry,
  Object3D,
  MeshPhongMaterial,
  CanvasTexture,
  BoxGeometry,
} from 'three';

import { ImagesMap } from '../../Types';

export function useNodeThreeObject(
  focusedNodeKey: any,
  focusedNodeNeighbors: Set<string>,
  images: ImagesMap
) {
  return useCallback(
    (node: any) => {
      const scene = new Scene();
      if (focusedNodeKey && focusedNodeKey !== node.zone && !focusedNodeNeighbors.has(node.zone)) {
        return scene;
      }

      // const sphereGeometry = new SphereGeometry(node.radius, 20, 20);
      // const sphereMaterial = new MeshLambertMaterial({
      //   color: node.color,
      //   opacity: 0.7,
      //   transparent: true,
      // });
      // const sphere = new Mesh(sphereGeometry, sphereMaterial);
      // scene.add(sphere);
      Cache.enabled = true;
      const logoRadiusWithScale = 25;

      const circleGeometry = new CircleGeometry(100, node.radius + 5);
      // const canvas = document.createElement('canvas');
      // const ctx = canvas.getContext('2d');

      // const x = 200,
      //   y = 100,
      //   // Radii of the black glow.
      //   innerRadius = 0,
      //   outerRadius = 200,
      //   // Radius of the entire circle.
      //   radius = 200;

      // if (ctx) {
      //   const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
      //   gradient.addColorStop(0, 'black');
      //   gradient.addColorStop(1, 'white');

      //   ctx.arc(x, y, radius, 0, 2 * Math.PI);

      //   ctx.fillStyle = gradient;
      //   ctx.fill();
      // }
      // const shadowTexture = new Texture(node.texture);
      // shadowTexture.needsUpdate = true;

      // const materialBall = new MeshBasicMaterial({
      //   map: shadowTexture,
      //   side: DoubleSide,
      // });

      // const mesh = new Mesh(circleGeometry, materialBall);
      // scene.add(mesh);
      //-----------------------------------

      // const texture2 = new Texture(getBallCanvas2(node));
      // texture2.needsUpdate = true;
      // const material2 = new SpriteMaterial({ map: texture2 });
      // const sprite2 = new Sprite(material2);
      // sprite2.scale.set(
      //   logoRadiusWithScale * 1.5,
      //   logoRadiusWithScale * 1.5,
      //   logoRadiusWithScale * 1.5
      // );
      // scene.add(sprite2);

      // const map = new TextureLoader().load(node.logoUrl);
      // const material = new SpriteMaterial({ map: map, color: 0xffffff });
      // const sprite = new Sprite(material);
      // sprite.scale.set(
      //   logoRadiusWithScale * 1.3,
      //   logoRadiusWithScale * 1.3,
      //   logoRadiusWithScale * 1.3
      // );
      // scene.add(sprite);

      const texture = new Texture(drawMyShadowCircle(node, images));
      texture.needsUpdate = true;
      const material1 = new SpriteMaterial({ map: texture });
      const sprite1 = new Sprite(material1);
      sprite1.scale.set(
        logoRadiusWithScale * 1.5,
        logoRadiusWithScale * 1.5,
        logoRadiusWithScale * 1.5
      );
      scene.add(sprite1);

      // const text = new SpriteText(node.name);
      // text.color = node.color;
      // text.backgroundColor = 'red';
      // text.position.set(scene.position.x, 20, scene.position.z);
      // const materialText = new SpriteMaterial({ map: node.text });
      // const spriteText = new Sprite(materialText);
      // spriteText.position.set(0, 0, 0);
      // scene.add(spriteText);

      return scene;
    },
    [focusedNodeKey, focusedNodeNeighbors]
  );
}

function drawShadow(cx: number, cy: number, r: number, strokeWidth: number) {
  const bitmap = document.createElement('canvas');
  const ctx = bitmap.getContext('2d');
  bitmap.width = 200;
  bitmap.height = 200;
  if (ctx) {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 15;
    //
    ctx.beginPath();
    ctx.arc(cx, cy, r - 5, 0, Math.PI * 2);
    ctx.clip();
    //
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.arc(cx, cy, r - strokeWidth, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowColor = 'rgba(0,0,0,0)';
    //
    ctx.beginPath();
    ctx.arc(cx, cy, r - strokeWidth, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
  return bitmap;
}

function getBallCanvas(node: any) {
  const bitmap = document.createElement('canvas');
  const g = bitmap.getContext('2d');
  bitmap.width = 100;
  bitmap.height = 100;
  if (g) {
    // g.font = 'Bold 20px Arial';

    // g.beginPath();
    // g.rect(0, 0, 100, 100);
    // g.fillStyle = 'blue';
    // g.fill();
    const x = 50,
      y = 50,
      // Radii of the black glow.
      innerRadius = 0,
      outerRadius = 100,
      // Radius of the entire circle.
      radius = 50;

    //
    // ctx.clip();
    const gradient = g.createRadialGradient(90, 90, innerRadius, 50, 50, outerRadius);
    gradient.addColorStop(0, '#191a1a');
    gradient.addColorStop(1, `#00000000`);
    // gradient.addColorStop(1, `${node.color}00`);

    g.strokeStyle = node.color;
    g.lineWidth = 5;
    g.shadowColor = 'red';
    g.shadowBlur = 15;

    g.beginPath();
    g.arc(x, y, radius - 5, 0, 2 * Math.PI);
    // g.fillStyle = gradient;
    g.fill();
    g.clip();

    // g.beginPath();
    // g.fillStyle = 'red';
    // g.strokeStyle = 'red';
    // g.arc(50, 50, 50, 0, Math.PI * 2);
    // g.fill();
    // g.stroke();
    // g.strokeText(node.name, 0, 20);
    // g.font = 'Bold 20px Arial';

    // g.fillStyle = 'white';
    // g.fillText(node.name, 0, 20);
    // g.strokeStyle = 'black';
    // g.strokeText(node.name, 0, 20);
  }
  return bitmap;
}

function getBallCanvas2(node: any) {
  const bitmap = document.createElement('canvas');
  const g = bitmap.getContext('2d');
  bitmap.width = 100;
  bitmap.height = 100;
  if (g) {
    // g.font = 'Bold 20px Arial';

    // g.beginPath();
    // g.rect(0, 0, 100, 100);
    // g.fillStyle = 'blue';
    // g.fill();
    const x = 50,
      y = 50,
      radius = 50;
    g.shadowBlur = 15;
    g.shadowColor = '#191a1a';
    g.beginPath();
    g.arc(x, y, radius, 0, 2 * Math.PI);
    g.fillStyle = node.color;
    g.fill();

    // g.beginPath();
    // g.fillStyle = 'red';
    // g.strokeStyle = 'red';
    // g.arc(50, 50, 50, 0, Math.PI * 2);
    // g.fill();
    // g.stroke();
    // g.strokeText(node.name, 0, 20);
    // g.font = 'Bold 20px Arial';

    // g.fillStyle = 'white';
    // g.fillText(node.name, 0, 20);
    // g.strokeStyle = 'black';
    // g.strokeText(node.name, 0, 20);
  }
  return bitmap;
}

function drawMyShadowCircle(node: any, images: any) {
  const bitmap = document.createElement('canvas');
  const ctx = bitmap.getContext('2d');
  bitmap.width = 100;
  bitmap.height = 100;
  if (ctx) {
    const circle = { x: 50, y: 50, r: 50 };
    const lights = getLights();

    // drawShadowShadow(ctx, circle, lights.sources[0]);

    ctx.fillStyle = node.color;
    ctx.globalCompositeOperation = 'source-over';
    drawCircle(ctx, { x: 50, y: 50, r: 50 });

    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(images[node.logoUrl], 25, 25, 50, 50);

    const grd = ctx.createLinearGradient(0, 0, 100, 100);
    grd.addColorStop(0, '#ffffff');
    grd.addColorStop(0.7, '#333333');
    grd.addColorStop(1, 'black');
    ctx.fillStyle = grd;
    // ctx.globalCompositeOperation = 'hard-light';
    // ctx.globalCompositeOperation = 'overlay';
    // drawCircle(ctx, { x: 50, y: 50, r: 50 });

    ctx.globalCompositeOperation = 'hard-light';
    drawCircle(ctx, { x: 50, y: 50, r: 50 });

    // const image = new Image();
    // image.src = node.logoUrl;
    // image.onload = function () {
    //   // ctx.drawImage(img, 0, 0); // Or at whatever offset you like
    //   ctx.drawImage(image, 0, 0, 100, 100);
    // };
    // console.log(typeof images[node.logoUrl]);
    // ctx.drawImage(images[node.logoUrl], 0, 0, 100, 100);

    //do each sphere
    // for each sphere do the each light
    for (let j = 0; j < lights.sources.length; j++) {
      const light = lights.sources[j];
      ctx.fillStyle = createGradient(ctx, circle, light, lights.ambient, light.lum);
      ctx.globalCompositeOperation = light.comp;
      light.draw(ctx, circle);
      // if (j === 2) {
      //   ctx.globalCompositeOperation = 'multiply';
      //   ctx.drawImage(images[node.logoUrl], 25, 25, 50, 50);
      // }
    }
    // ctx.globalCompositeOperation = 'multiply';
    // ctx.drawImage(images[node.logoUrl], 25, 25, 50, 50);
    // ctx.globalCompositeOperation = 'source-in';
  }
  return bitmap;
}

function drawCircle(ctx: any, c: any) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.fill();
}
function drawCircle1(ctx: any, c: any) {
  ctx.beginPath();
  const x = c.x;
  const y = c.y;
  const r = c.r * 0.95;
  ctx.moveTo(x, y - r);
  ctx.quadraticCurveTo(x + r * 0.8, y - r, x + r * 1, y - r / 10);
  ctx.quadraticCurveTo(x + r, y + r / 3, x, y + r / 3);
  ctx.quadraticCurveTo(x - r, y + r / 3, x - r, y - r / 10);
  ctx.quadraticCurveTo(x - r * 0.8, y - r, x, y - r);
  ctx.fill();
}
function drawShadowShadow(ctx: any, circle: any, light: any) {
  const x = light.x; // get the light position as we will modify it
  const y = light.y;
  const r = circle.r * 1.1;
  const vX = x - circle.x; // get the vector to the light source
  const vY = y - circle.y;
  const dist = -Math.sqrt(vX * vX + vY * vY) * 0.3;
  const dir = Math.atan2(vY, vX);
  const lx = Math.cos(dir) * dist + circle.x; // light canb not go past radius
  const ly = Math.sin(dir) * dist + circle.y;
  const grd = ctx.createRadialGradient(lx, ly, (r * 1) / 4, lx, ly, r);
  grd.addColorStop(0, 'rgba(0,0,0,1)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grd;
  drawCircle(ctx, { x: lx, y: ly, r: r });
}

// 2D light simulation. This is just an approximation and does not match real world stuff
// based on Phong shading.
// x,y,r descript the imagined sphere
// light is the light source
// ambient is the ambient lighting
// amount is the amount of this layers effect has on the finnal result
function createGradient(ctx: any, circle: any, light: any, ambient: any, amount: any) {
  // let r, g, b; // colour channels
  const x = circle.x; // get lazy coder values
  const y = circle.y;
  const r = circle.r;
  let lx = light.x; // get the light position as we will modify it
  let ly = light.y;
  const vX = light.x - x; // get the vector to the light source
  const vY = light.y - y;
  // get the distance to the light source
  let dist = Math.sqrt(vX * vX + vY * vY);
  // id the light is a specular source then move it to half its position away
  dist *= light.spec ? 0.5 : 1;
  // get the direction of the light source.
  const dir = Math.atan2(vY, vX);

  // fix light position
  lx = Math.cos(dir) * dist + x; // light canb not go past radius
  ly = Math.sin(dir) * dist + y;
  // add some dimming so that the light does not wash out.
  const dim = 1 - Math.min(1, dist / (r * 4));
  // add a bit of pretend rotation on the z axis. This will bring in a little backlighting
  const lightRotate = (1 - dim) * (Math.PI / 2);
  // spread the light a bit when near the edges. Reduce a bit for spec light
  const spread = Math.sin(lightRotate) * r * (light.spec ? 0.5 : 1);

  // create a gradient
  const grd = ctx.createRadialGradient(lx, ly, spread, x, y, r + dist);
  // use the radius to workout what step will cover a pixel (approx)
  const step = Math.PI / 2 / r;
  // for each pixel going out on the radius add the caclualte light value
  let red = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < Math.PI / 2; i += step) {
    if (light.spec) {
      // fake spec light reduces dim fall off
      // light reflected has sharper falloff
      // do not include back light via Math.abs
      red = Math.max(
        0,
        light.col[0] * Math.cos((i + lightRotate) * light.specPower) * 1 - dim * (1 / 3)
      );
      g = Math.max(
        0,
        light.col[1] * Math.cos((i + lightRotate) * light.specPower) * 1 - dim * (1 / 3)
      );
      b = Math.max(
        0,
        light.col[2] * Math.cos((i + lightRotate) * light.specPower) * 1 - dim * (1 / 3)
      );
    } else {
      // light value is the source lum * the cos of the angle to the light
      // Using the abs value of the refelected light to give fake back light.
      // add a bit of rotation with (lightRotate)
      // dim to stop washing out
      // then clamp so does not go below zero
      red = Math.max(0, light.col[0] * Math.abs(Math.cos(i + lightRotate)) * dim);
      g = Math.max(0, light.col[1] * Math.abs(Math.cos(i + lightRotate)) * dim);
      b = Math.max(0, light.col[2] * Math.abs(Math.cos(i + lightRotate)) * dim);
    }
    // add ambient light
    if (light.useAmbient) {
      red += ambient[0];
      g += ambient[1];
      b += ambient[2];
    }

    // add the colour stop with the amount of the effect we want.
    grd.addColorStop(
      i / (Math.PI / 2),
      'rgba(' + Math.floor(red) + ',' + Math.floor(g) + ',' + Math.floor(b) + ',' + amount + ')'
    );
  }
  //return the gradient;
  return grd;
}

function getLights() {
  return {
    ambient: [10, 50, 100],
    sources: [
      // {
      //   x: 0, // position of light
      //   y: 0,
      //   col: [R(255), R(255), R(255)], // RGB intensities can be any value
      //   lum: 0.8, // total lumanance for this light
      //   // comp: 'source-over' as GlobalCompositeOperation, // composite opperation
      //   comp: 'hard-light' as GlobalCompositeOperation, // composite opperation
      //   spec: false, // if true then use a pretend specular falloff
      //   draw: drawCircle,
      //   useAmbient: true,
      // },
      {
        // this light is for a little accent and is at 180 degree from the light
        x: 0,
        y: 0,
        // col: [255, 0, 0],
        col: [R(255), R(255), R(255)],
        lum: R(0.3),
        // comp: 'hard-light' as GlobalCompositeOperation,
        comp: 'hard-light' as GlobalCompositeOperation,
        spec: true, // if true then you MUST inclue spec power
        specPower: R(2),
        draw: drawCircle,
        useAmbient: false,
      },
      // {
      //   x: 100,
      //   y: 100,
      //   // col: [R(1255), R(1255), R(1255)],
      //   col: [R(1255), R(1255), R(1255)],
      //   lum: R(0.5),
      //   comp: 'lighter' as GlobalCompositeOperation,
      //   spec: false,
      //   draw: drawCircle,
      //   useAmbient: false,
      // },
      // {
      //   x: 50,
      //   y: 50,
      //   col: [R(155), R(155), R(155)],
      //   lum: R(1),
      //   comp: 'lighter' as GlobalCompositeOperation,
      //   spec: true, // if true then you MUST inclue spec power
      //   specPower: 2.32,
      //   draw: drawCircle,
      //   useAmbient: false,
      // },
      // {
      //   x: 33.33,
      //   y: 33.33,
      //   col: [R(1255), R(1255), R(1255)],
      //   lum: R(0.2),
      //   comp: 'multiply' as GlobalCompositeOperation,
      //   spec: false,
      //   draw: drawCircle,
      //   useAmbient: false,
      // },
      {
        x: 50,
        y: -100,
        col: [R(2255), R(2555), R(2255)],
        lum: R(0.2),
        // comp: 'exclusion' as GlobalCompositeOperation,
        comp: 'screen' as GlobalCompositeOperation,
        spec: true,
        specPower: 1.3,
        draw: drawCircle1,
        useAmbient: false,
      },
    ],
  };
}
function R(num: number) {
  return num;
}
