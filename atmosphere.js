function calcFR( Temperature, Pressure, RelativeHumidity )
{
	var VPw = 4e-6 * Math.pow( Temperature, 3 ) - 0.0004 * Math.pow( Temperature, 2 ) + 0.0234 * Temperature - 0.2517;
	var FRH = 0.995 * ( Pressure / ( Pressure - ( 0.3783 ) * ( RelativeHumidity ) * VPw ) );
	return FRH;
}

function calcFP( Pressure )
{
	var Pstd = 29.53; // in-hg
	var FP = 0;
	FP = ( Pressure - Pstd ) / ( Pstd );
	return FP;
}

function calcFT( Temperature, Altitude )
{
	var Tstd = -0.0036 * Altitude + 59;
	var FT = ( Temperature - Tstd ) / ( 459.6 + Tstd );
	return FT;
}

function calcFA( Altitude )
{
	var fa = 0;
	fa = -4e-15 * Math.pow( Altitude, 3 ) + 4e-10 * Math.pow( Altitude, 2 ) - 3e-5 * Altitude + 1;
	return ( 1 / fa );
}

function AtmCorrect( DragCoefficient, Altitude, Barometer, Temperature, RelativeHumidity )
{

	var FA = calcFA( Altitude );
	var FT = calcFT( Temperature, Altitude );
	var FR = calcFR( Temperature, Barometer, RelativeHumidity );
	var FP = calcFP( Barometer );

	// Calculate the atmospheric correction factor
	var CD = ( FA *( 1 + FT - FP ) * FR );
	return DragCoefficient * CD;
}

