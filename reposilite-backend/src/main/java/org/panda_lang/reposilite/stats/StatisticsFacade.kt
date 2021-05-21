/*
 * Copyright (c) 2021 dzikoysk
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
package org.panda_lang.reposilite.stats

import net.dzikoysk.dynamiclogger.Journalist
import net.dzikoysk.dynamiclogger.Logger
import org.panda_lang.reposilite.failure.FailureFacade
import java.util.concurrent.ConcurrentHashMap

class StatisticsFacade internal constructor(
    private val journalist: Journalist,
    private val failureFacade: FailureFacade,
    private val statisticsRepository: StatisticsRepository
) : Journalist {

    private val recordsBulk: ConcurrentHashMap<Pair<RecordType, String>, Int> = ConcurrentHashMap()

    fun increaseRecord(type: RecordType, uri: String) =
        recordsBulk.merge(Pair(type, uri), 1) { cached, value -> cached + value }

    override fun getLogger(): Logger =
        journalist.logger

}