//
//  PokeMonitor.m
//  PokedexGo
//
//  Created by Lachlan Kermode on 7/17/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "PokeMonitor.h"
#import "RCTLog.h"

@implementation PokeMonitor

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
