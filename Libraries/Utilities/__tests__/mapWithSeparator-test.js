/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

describe('mapWithSeparator', () => {
  const mapWithSeparator = require('../mapWithSeparator');

  it('mapWithSeparator returns expected results', () => {
    const array = [1, 2, 3];
    const result = mapWithSeparator(
      array,
      function(value) {
        return value * 2;
      },
      function() {
        return 0;
      }
    );
    expect(result).toEqual([2, 0, 4, 0, 6]);
  });

  it('mapWithSeparator indices are correct', () => {
    const array = [1, 2, 3];
    const result = mapWithSeparator(
      array,
      function(value, index) {
        return index;
      },
      function(index) {
        return index;
      }
    );
    expect(result).toEqual([0, 0, 1, 1, 2]);
  });

  it('mapWithSeparator passes correct array and indices', () => {
    const array = [3, 2, 1];
    const result = mapWithSeparator(
      array,
      function(value, index, arr) {
        return arr[index];
      },
      function(index) {
        return index;
      }
    );
    expect(result).toEqual([3, 0, 2, 1, 1]);
  });
});
