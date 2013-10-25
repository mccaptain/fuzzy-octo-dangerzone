// Specialty angular conversion functions
function DegtoMOA( deg )
{
	return deg * 60;
}

function DegtoRad( deg )
{
	return deg * M_PI / 180;
}

function MOAtoDeg( moa )
{
	return moa / 60;
}

function MOAtoRad( moa )
{
	return moa / 60 * M_PI / 180;
}

function RadtoDeg( rad )
{
	return rad * 180 / M_PI;
}

function RadtoMOA( rad )
{
	return rad * 60 * 180 / M_PI;
}

