/*
 * Copyright (c) 2020 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.panda_lang.reposilite.error

import groovy.transform.CompileStatic
import org.apache.http.HttpStatus
import org.junit.jupiter.api.Test
import org.panda_lang.reposilite.error.ErrorDto

import static org.junit.jupiter.api.Assertions.assertEquals

@CompileStatic
class ErrorDtoTest {

    private static final ErrorDto ERROR_DTO = new ErrorDto(HttpStatus.SC_NOT_FOUND, "Message")

    @Test
    void 'should return status code' () {
        assertEquals HttpStatus.SC_NOT_FOUND, ERROR_DTO.getStatus()
    }

    @Test
    void 'should return status message' () {
        assertEquals "Message", ERROR_DTO.getMessage()
    }

}