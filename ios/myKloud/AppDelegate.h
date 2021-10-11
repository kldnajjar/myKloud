#import <Foundation/Foundation.h>
#import <EXUpdates/EXUpdatesAppController.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UMCore/UMAppDelegateWrapper.h>
#import "RNAppAuthAuthorizationFlowManager.h"

@interface AppDelegate : UMAppDelegateWrapper <RCTBridgeDelegate, EXUpdatesAppControllerDelegate, RNAppAuthAuthorizationFlowManager>

@end
