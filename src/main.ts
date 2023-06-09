// SPDX-License-Identifier: MIT

import { setFailed } from '@actions/core';

import { action } from './action';

try {
  const message = await action();
} catch (error) {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else {
    message = JSON.stringify(error);
  }

  setFailed(message);
}
