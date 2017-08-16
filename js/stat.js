'use strict';
window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 56);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHieght = 150;
  var step = histogramHieght / (max - 0);

  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 250;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(44, 91, 191, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, -times [i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY + 20);
    ctx.fillText(Math.floor(times [i]), initialX + (barWidth + indent) * i, initialY - times [i] * step);
  }
};
