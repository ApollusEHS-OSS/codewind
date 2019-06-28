/*******************************************************************************
 * Copyright (c) 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
import * as path from "path";

export const FIXTURES = "idc-fixtures";
export const gitRepo = process.env.TRAVIS_PULL_REQUEST ? "https://github.ibm.com/dev-ex/idc-test-resources.git" : "git@github.ibm.com:dev-ex/idc-test-resources.git";
export const fixturesDir = path.resolve(__dirname, "..", FIXTURES);

export const repoTemplates: any = {
    "liberty": "https://github.com/microclimate-dev2ops/javaMicroProfileTemplate",
    "nodejs": "https://github.com/microclimate-dev2ops/nodeExpressTemplate.git",
    "spring": "https://github.com/microclimate-dev2ops/springJavaTemplate",
    "swift": "https://github.com/microclimate-dev2ops/swiftTemplate",
    "go": "https://github.com/microclimate-dev2ops/microclimateGoTemplate",
    "python": "https://github.com/microclimate-dev2ops/SVTPythonTemplate",
    "lagom": "https://github.com/microclimate-dev2ops/lagomJavaTemplate"
};
