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
export type * from "./ts/getDeclaredExportNamesFromCode.d.mts"
export type * from "./ts/resolveImportAliases.d.mts"
export type * from "./ts/getExportedEntities.d.mts"
export type * from "./ts/typeDeclarationBundler.d.mts"
export type * from "./ts/assetFileBundler.d.mts"
export type * from "./ts/generateFunctionFactoryCodeForRealmJSAndWebV0.d.mts"

export type * from "./util/expandAsyncSyncVariantFilePath.d.mts"
export type * from "./util/expandAsyncSyncVariantName.d.mts"
export type * from "./util/isExpandableFilePath.d.mts"
export type * from "./util/isExpandableName.d.mts"

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
import type {TsGetDeclaredExportNamesFromCode} from "./ts/getDeclaredExportNamesFromCode.d.mts"
import type {TsResolveImportAliases} from "./ts/resolveImportAliases.d.mts"
import type {TsGetExportedEntities} from "./ts/getExportedEntities.d.mts"
import type {TsTypeDeclarationBundler} from "./ts/typeDeclarationBundler.d.mts"
import type {TsAssetFileBundler} from "./ts/assetFileBundler.d.mts"
import type {TsGenerateFunctionFactoryCodeForRealmJSAndWebV0} from "./ts/generateFunctionFactoryCodeForRealmJSAndWebV0.d.mts"

import * as ts from "typescript"

import type {UtilExpandAsyncSyncVariantFilePath} from "./util/expandAsyncSyncVariantFilePath.d.mts"
import type {UtilExpandAsyncSyncVariantName} from "./util/expandAsyncSyncVariantName.d.mts"
import type {UtilIsExpandableFilePath} from "./util/isExpandableFilePath.d.mts"
import type {UtilIsExpandableName} from "./util/isExpandableName.d.mts"

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
	tsGetDeclaredExportNamesFromCode: TsGetDeclaredExportNamesFromCode,
	tsResolveImportAliases: TsResolveImportAliases,
	tsGetExportedEntities: TsGetExportedEntities,
	tsTypeDeclarationBundler: TsTypeDeclarationBundler,
	tsAssetFileBundler: TsAssetFileBundler,
	tsGenerateFunctionFactoryCodeForRealmJSAndWebV0: TsGenerateFunctionFactoryCodeForRealmJSAndWebV0,

	utilExpandAsyncSyncVariantFilePath: UtilExpandAsyncSyncVariantFilePath,
	utilExpandAsyncSyncVariantName: UtilExpandAsyncSyncVariantName,
	utilIsExpandableFilePath: UtilIsExpandableFilePath,
	utilIsExpandableName: UtilIsExpandableName
}
