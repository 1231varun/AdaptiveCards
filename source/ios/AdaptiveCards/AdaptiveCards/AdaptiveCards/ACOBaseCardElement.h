//
//  ACOBaseCardElement
//  ACOBaseCardElement.h
//
//  Copyright © 2018 Microsoft. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@class ACOFeatureRegistration;

@interface ACOBaseCardElement:NSObject

- (NSData *)additionalProperty;

typedef NS_ENUM(NSInteger, ACRCardElementType) {
    ACRUnsupported = 0,
    ACRAdaptiveCard,
    ACRTextBlock,
    ACRImage,
    ACRContainer,
    ACRColumn,
    ACRColumnSet,
    ACRFactSet,
    ACRFact,
    ACRImageSet,
    ACRChoiceInput,
    ACRChoiceSetInput,
    ACRDateInput,
    ACRNumberInput,
    ACRRichTextBlock,
    ACRTextBlock,
    ACRTextInput,
    ACRTimeInput,
    ACRToggleInput,
    ACRCustom,
    ACRUnknown,
    ACRMedia,
};

typedef NS_ENUM(NSInteger, ACRContainerStyle) {
    ACRNone,
    ACRDefault,
    ACREmphasis,
    ACRGood,
    ACRWarning,
    ACRAttention,
    ACRAccent
};

typedef NS_ENUM(NSInteger, ACRBleedDirection) {
    ACRBleedRestricted = 0x0000,
    ACRBleedToLeadingEdge = 0x0001,
    ACRBleedToTrailingEdge = 0x0010,
    ACRBleedToTopEdge = 0x0100,
    ACRBleedToBottomEdge = 0x1000,
    ACRBleedToAll = ACRBleedToLeadingEdge | ACRBleedToTrailingEdge | ACRBleedToTopEdge | ACRBleedToBottomEdge
};

@property ACRCardElementType type;

- (BOOL)meetsRequirements:(ACOFeatureRegistration *)featureReg;

@end

@protocol ACOIBaseCardElementParser

@optional
- (UIView *)deserializeToCustomUIElement:(NSData* )json;

@end
