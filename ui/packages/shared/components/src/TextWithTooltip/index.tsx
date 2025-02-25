// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Tooltip} from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';

import {cutToMaxStringLength} from '@parca/functions';

interface Props {
  text: string;
  maxTextLength: number;
  id: string;
}

const TextWithTooltip = ({text, maxTextLength, id}: Props): JSX.Element => {
  return (
    <>
      <span id={id} data-tooltip-content={text}>
        {cutToMaxStringLength(text, maxTextLength)}
      </span>
      <Tooltip anchorId={id} />
    </>
  );
};

export default TextWithTooltip;
