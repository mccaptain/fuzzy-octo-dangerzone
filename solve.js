function SolveAll( DragFunction, DragCoefficient, Vi, SightHeight, ShootingAngle, ZAngle, WindSpeed, WindAngle ){

	var Solution = new Array();

	var t = 0;
	var dt = 0.5 / Vi;
	var v = 0;
	var vx = 0;
	var vx1 = 0;
	var vy = 0;
	var vy1 = 0;
	var dv = 0;
	var dvx = 0;
	var dvy = 0;
	var x = 0;
	var y = 0;
	
	var headwind = HeadWind(WindSpeed, WindAngle);
	var crosswind = CrossWind(WindSpeed, WindAngle);
	
	var Gy = GRAVITY*Math.cos(DegtoRad((ShootingAngle + ZAngle)));
	var Gx = GRAVITY*Math.sin(DegtoRad((ShootingAngle + ZAngle)));

	vx = Vi*Math.cos(DegtoRad(ZAngle));
	vy = Vi*Math.sin(DegtoRad(ZAngle));

	y = -SightHeight / 12;

	var n = 0;
	for (t = 0; ; t = t + dt){

		vx1 = vx;
		vy1 = vy;	
		v = Math.pow( Math.pow( vx, 2 ) + Math.pow( vy, 2 ), 0.5 );
		dt = 0.5/v;
	
		// Compute acceleration using the drag function retardation	
		dv = retard( DragFunction, DragCoefficient, v + headwind );		
		dvx = -( vx / v ) * dv;
		dvy = -( vy / v ) * dv;

		// Compute velocity, including the resolved gravity vectors.	
		vx = vx + dt*dvx + dt*Gx;
		vy = vy + dt*dvy + dt*Gy;

		if ( x/3 >= n )
		{
			ptr[ 10 * n + 0 ]=x/3;							// Range in yds
			ptr[ 10 * n + 1 ]=y*12;							// Path in inches
			ptr[ 10 * n + 2 ]=-RadtoMOA(Math.atan(y/x));			// Correction in MOA
			ptr[ 10 * n + 3 ]=t+dt;							// Time in s
			ptr[ 10 * n + 4 ]=Windage(crosswind,Vi,x,t+dt); 	// Windage in inches
			ptr[ 10 * n + 5 ]=RadtoMOA(Math.atan(ptr[10*n+4]));	// Windage in MOA
			ptr[ 10 * n + 6 ]=v;								// Velocity (combined)
			ptr[ 10 * n + 7 ]=vx;							// Velocity (x)
			ptr[ 10 * n + 8 ]=vy;							// Velocity (y)
			ptr[ 10 * n + 9 ]=0;								// Reserved
			n++;	
		}	
		
		// Compute position based on average velocity.
		x = x + dt*( vx + vx1 ) / 2;
		y = y + dt*( vy + vy1 ) / 2;
		
		if ( Math.abs( vy ) > Math.abs( 3 * vx ) )
		{
			break;
		}
		if (n>=__BCOMP_MAXRANGE__+1)
		{
			break;
		}
	}

	ptr[10*__BCOMP_MAXRANGE__+1] = n;
	
	return ;
}
