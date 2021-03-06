/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	median = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array median', function tests() {

	it( 'should export a function', function test() {
		expect( median ).to.be.a( 'function' );
	});

	it( 'should compute the distribution median', function test() {
		var k, actual, expected;

		k = new Float64Array( [ 2, 4, 8, 16  ] );
		actual = new Float64Array( k.length );

		actual = median( actual, k );
		expected = new Float64Array( [ 1.404664, 3.369684, 7.351680, 15.342550 ] );

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( median( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
