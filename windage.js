function Windage( WindSpeed, Vi, xx, t )
{
	var Vw = WindSpeed * 17.60; // Convert to inches per second.
	return ( Vw * ( t - xx / Vi ) );
}

// Headwind is positive at WindAngle=0
function HeadWind( WindSpeed, WindAngle )
{
	var Wangle = DegtoRad(WindAngle);
	return ( Math.cos( Wangle ) * WindSpeed );
}

// Positive is from Shooter's Right to Left (Wind from 90 degree)
function CrossWind( WindSpeed, WindAngle )
{
	var Wangle = DegtoRad( WindAngle );
	return ( Math.sin( Wangle ) * WindSpeed );
}