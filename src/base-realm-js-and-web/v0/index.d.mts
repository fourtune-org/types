export type * from "./js/bundler.d.mts"
export type * from "./js/resolveImportAliases.d.mts"
export type * from "./js/getDeclaredExportNamesFromCode.d.mts"
export type * from "./js/getRequestedAssetsFromCode.d.mts"
export type * from "./js/getRequestedAssetsFromFiles.d.mts"
export type * from "./js/normalizePath.d.mts"
export type * from "./js/parseAssetURL.d.mts"
export type * from "./js/getBaseTsConfigPath.d.mts"

export type * from "./ts/stripTypesFromCode.d.mts"
export type * from "./ts/readTSConfigFile.d.mts"
export type * from "./ts/invokeTypeScript.d.mts"
export type * from "./ts/bundler.d.mts"
export type * from "./ts/getDeclaredExportNamesFromCode.d.mts"
export type * from "./ts/resolveImportAliases.d.mts"
export type * from "./ts/generateFunctionFactoryCode.d.mts"
export type * from "./ts/getExportedEntities.d.mts"

import type {JsBundler} from "./js/bundler.d.mts"
import type {JsResolveImportAliases} from "./js/resolveImportAliases.d.mts"
import type {JsGetDeclaredExportNamesFromCode} from "./js/getDeclaredExportNamesFromCode.d.mts"
import type {JsGetRequestedAssetsFromCode} from "./js/getRequestedAssetsFromCode.d.mts"
import type {JsGetRequestedAssetsFromFiles} from "./js/getRequestedAssetsFromFiles.d.mts"
import type {JsNormalizePath} from "./js/normalizePath.d.mts"
import type {JsParseAssetURL} from "./js/parseAssetURL.d.mts"
import type {JsGetBaseTsConfigPath} from "./js/getBaseTsConfigPath.d.mts"

import type {TsStripTypesFromCode} from "./ts/stripTypesFromCode.d.mts"
import type {TsReadTSConfigFile} from "./ts/readTSConfigFile.d.mts"
import type {TsInvokeTypeScript} from "./ts/invokeTypeScript.d.mts"
import type {TsBundler} from "./ts/bundler.d.mts"
import type {TsGetDeclaredExportNamesFromCode} from "./ts/getDeclaredExportNamesFromCode.d.mts"
import type {TsResolveImportAliases} from "./ts/resolveImportAliases.d.mts"
import type {TsGenerateFunctionFactoryCode} from "./ts/generateFunctionFactoryCode.d.mts"
import type {TsGetExportedEntities} from "./ts/getExportedEntities.d.mts"

import * as ts from "typescript"

export type DefaultExportObject = {
	jsBundler: JsBundler,
	jsResolveImportAliases: JsResolveImportAliases,
	jsGetDeclaredExportNamesFromCode: JsGetDeclaredExportNamesFromCode,
	jsGetRequestedAssetsFromCode: JsGetRequestedAssetsFromCode,
	jsGetRequestedAssetsFromFiles: JsGetRequestedAssetsFromFiles,
	jsNormalizePath: JsNormalizePath,
	jsParseAssetURL: JsParseAssetURL,
	jsGetBaseTsConfigPath: JsGetBaseTsConfigPath,

	ts: typeof ts,
	tsStripTypesFromCode: TsStripTypesFromCode,
	tsReadTSConfigFile: TsReadTSConfigFile,
	tsInvokeTypeScript: TsInvokeTypeScript,
	tsBundler: TsBundler,
	tsGetDeclaredExportNamesFromCode: TsGetDeclaredExportNamesFromCode,
	tsResolveImportAliases: TsResolveImportAliases,
	tsGenerateFunctionFactoryCode: TsGenerateFunctionFactoryCode,
	tsGetExportedEntities: TsGetExportedEntities
}
