// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import { app } from '../models';
import { graph } from '../models';
import { context } from '../models';

export function GraphRules(arg1: number): Promise<app.GraphRulesInfo | Error>;

export function GraphStart(arg1: number, arg2: string): Promise<Error>;

export function GraphStop(arg1: number, arg2: string): Promise<Error>;

export function QueryApplyAndParams(arg1: number): Promise<graph.GraphParameterVo | Error>;

export function WailsInit(arg1: context.Context): Promise<Error>;

export function CliLink(arg1: number): Promise<number | Error>;
