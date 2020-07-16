figma.showUI(__html__)
figma.ui.resize(390 , 500);

figma.ui.onmessage = msg => {
  if(msg.type === "load-svg"){
    const frame = figma.createFrame();
    const size = 48;
    frame.name = msg.name;

    let icon = msg.icon;

    frame.resizeWithoutConstraints(size,size)
    const svg = figma.createNodeFromSvg(icon);

    svg.resize(size  , size );

    frame.backgrounds =  [{type: 'SOLID', color: {r : 0 , g : 0 , b :0 } , opacity : 0}];
    frame.appendChild(svg.children[0]);
    svg.remove();
    // Center the frame in our current viewport so we can see it.
    frame.x = figma.viewport.center.x - size  / 2
    frame.y = figma.viewport.center.y - size  / 2
  }
  // figma.closePlugin()
}
