// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import { application } from '../models';
import { context } from '../models';

export function DeleteGraphAndParams(arg1: number): Promise<boolean | Error>;

export function QueryApplicationById(arg1: number): Promise<application.ApplyVo | Error>;

export function QueryGraphStatus(arg1: string): Promise<number | Error>;

export function UpdateApplication(
  arg1: application.UpdateApplicationParam,
): Promise<boolean | Error>;

export function WailsInit(arg1: context.Context): Promise<Error>;

export function AddApplication(arg1: application.AddApplicationParam): Promise<boolean | Error>;

export function ApplicationList(
  arg1: number,
  arg2: number,
  arg3: string,
  arg4: number,
): Promise<application.PageApplicationVo | Error>;

export function DeleteApplication(arg1: number): Promise<boolean | Error>;
