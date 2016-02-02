/**
 * 
 */

	// Image & Canvas
	var jcrop,
	 	img_src,
	 	imageObj,
	 	context,
	 	canvas;
	
	// Size of elements & Scale
	var window_w,
		window_h,
		scale_w,
		scale_h,
		cropHolder_h,
		crop_w,
		crop_h;
	
	// Crop with Canvas
	var coord,
		sourceX,
		sourceY,
		sourceW,
		sourceH,
		destX,
		destY,
		destW,
		destH;