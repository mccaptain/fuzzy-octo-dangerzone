function GetRange( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage ];
	}
	else return 0;
}

function GetPath( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 1];
	}
	else return 0;
}

function GetMOA( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 2];
	}
	else return 0;
}

function GetTime( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 3];
	}
	else return 0;
}

function GetWindage( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 4];
	}
	else return 0;
}

function GetWindageMOA( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 5];
	}
	else return 0;
}

function GetVelocity( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 6];
	}
	else return 0;
}

function GetVx( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 7];
	}
	else return 0;
}

function GetVy( sln, yardage )
{
	var size = sln[ __BCOMP_MAXRANGE__ * 10 + 1 ];
	if ( yardage < size )
	{
		return sln[ 10 * yardage + 8];
	}
	else return 0;
}

