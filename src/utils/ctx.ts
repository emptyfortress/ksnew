interface BoundingBox {
	left: number
	right: number
	top: number
	bottom: number
}
const drawCycle = (ctx: any, bb: BoundingBox, color: string) => {
	// const color = 'blue'

	ctx.lineWidth = 1
	ctx.beginPath()
	ctx.arc(bb.right, bb.top, 12, (Math.PI / 180) * 180, (Math.PI / 180) * 90, false)
	ctx.strokeStyle = color
	ctx.stroke()

	ctx.beginPath()
	ctx.moveTo(bb.right - 13, bb.top + 2) //center
	ctx.lineTo(bb.right - 14, bb.top - 7)
	ctx.lineTo(bb.right - 7, bb.top - 5)
	ctx.fillStyle = color
	ctx.fill()
	ctx.font = '13px Arial'
	ctx.fillText('2', bb.right - 3, bb.top + 3)
}

export { drawCycle }
