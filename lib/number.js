'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var pow = Math.pow;


// MEDIAN //

/**
* FUNCTION median( k )
*	Computes the distribution median for a Chi-squared distribution with parameter k.
*
* @param {Number} k - degrees of freedom
* @returns {Number} distribution median
*/
function median( k ) {
	if ( !isPositive( k ) ) {
		return NaN;
	}
	return k * pow( 1 - 2 / (9*k), 3 );
} // end FUNCTION median()


// EXPORTS

module.exports =  median;
