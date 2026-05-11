package ratio_setting

import (
	"github.com/QuantumNous/new-api/types"
)

var defaultCacheRatio = map[string]float64{
	"gemini-2.5-pro":                        0.1,
	"gemini-2.5-flash":                      0.1,
	"gemini-2.5-flash-preview-09-2025":      0.1,
	"gemini-2.5-flash-lite":                 0.1,
	"gemini-2.5-flash-lite-preview-09-2025": 0.1,
	"gemini-3-flash-preview":                0.1,
	"gemini-3-pro-preview":                  0.1,
	"gemini-3.1-pro-preview":                0.1,
	"gemini-3.1-pro-preview-customtools":    0.1,
	"gemini-3.1-flash-lite-preview":         0.1,
	"gpt-4":                                 0.5,
	"o1":                                    0.5,
	"o1-2024-12-17":                         0.5,
	"o1-preview-2024-09-12":                 0.5,
	"o1-preview":                            0.5,
	"o1-mini-2024-09-12":                    0.5,
	"o1-mini":                               0.5,
	"o3-mini":                               0.5,
	"o3-mini-2025-01-31":                    0.5,
	"gpt-4o-2024-11-20":                     0.5,
	"gpt-4o-2024-08-06":                     0.5,
	"gpt-4o":                                0.5,
	"gpt-4o-mini-2024-07-18":                0.5,
	"gpt-4o-mini":                           0.5,
	"chat-latest":                           0.1,
	"gpt-4o-realtime-preview":               0.5,
	"gpt-4o-mini-realtime-preview":          0.5,
	"gpt-4.5-preview":                       0.5,
	"gpt-4.5-preview-2025-02-27":            0.5,
	"gpt-4.1":                               0.25,
	"gpt-4.1-mini":                          0.25,
	"gpt-4.1-nano":                          0.25,
	"gpt-5":                                 0.1,
	"gpt-5-2025-08-07":                      0.1,
	"gpt-5-chat-latest":                     0.1,
	"gpt-5-mini":                            0.1,
	"gpt-5-mini-2025-08-07":                 0.1,
	"gpt-5-nano":                            0.1,
	"gpt-5-nano-2025-08-07":                 0.1,
	"gpt-5.5":                               0.1,
	"gpt-5.5-2026-04-23":                    0.1,
	"gpt-5.5-pro":                           1,
	"gpt-5.5-pro-2026-04-23":                1,
	"gpt-5.4":                               0.1,
	"gpt-5.4-2026-03-05":                    0.1,
	"gpt-5.4-pro":                           1,
	"gpt-5.4-pro-2026-03-05":                1,
	"gpt-5.4-mini":                          0.1,
	"gpt-5.4-mini-2026-03-17":               0.1,
	"gpt-5.4-nano":                          0.1,
	"gpt-5.4-nano-2026-03-17":               0.1,
	"gpt-5.2":                               0.1,
	"gpt-5.2-chat-latest":                   0.1,
	"gpt-5.2-codex":                         0.1,
	"gpt-5.1":                               0.1,
	"gpt-5.1-chat-latest":                   0.1,
	"gpt-5.1-codex":                         0.1,
	"gpt-5.1-codex-max":                     0.1,
	"gpt-5.1-codex-mini":                    0.1,
	"deepseek-chat":                         0.25,
	"deepseek-reasoner":                     0.25,
	"deepseek-coder":                        0.25,
	"deepseek-v4-flash":                     0.02,
	"deepseek-v4-pro":                       0.008333333333333333,
	"claude-3-sonnet-20240229":              0.1,
	"claude-3-opus-20240229":                0.1,
	"claude-3-haiku-20240307":               0.1,
	"claude-3-5-haiku-20241022":             0.1,
	"claude-haiku-4-5-20251001":             0.1,
	"claude-3-5-sonnet-20240620":            0.1,
	"claude-3-5-sonnet-20241022":            0.1,
	"claude-3-7-sonnet-20250219":            0.1,
	"claude-sonnet-4-20250514":              0.1,
	"claude-opus-4-20250514":                0.1,
	"claude-opus-4-1-20250805":              0.1,
	"claude-sonnet-4-5-20250929":            0.1,
	"claude-sonnet-4-6":                     0.1,
	"claude-opus-4-5-20251101":              0.1,
	"claude-opus-4-6":                       0.1,
	"claude-opus-4-7":                       0.1,
	"grok-4.3":                              0.16,
	"grok-4.3-latest":                       0.16,
	"grok-latest":                           0.16,
	"grok-4.20":                             0.16,
	"grok-4.20-0309":                        0.16,
	"grok-4.20-multi-agent-0309":            0.16,
	"grok-4.20-multi-agent":                 0.16,
	"grok-4.20-0309-reasoning":              0.16,
	"grok-4.20-reasoning":                   0.16,
	"grok-4.20-0309-non-reasoning":          0.16,
	"grok-4.20-non-reasoning":               0.16,
	"GLM-5.1":                               0.18571428571428572,
	"GLM-5":                                 0.2,
	"GLM-5-Turbo":                           0.2,
	"GLM-4.7":                               0.18333333333333332,
	"GLM-4.7-FlashX":                        0.14285714285714285,
	"GLM-4.7-Flash":                         0,
	"GLM-4.6":                               0.18333333333333332,
	"GLM-4.5":                               0.18333333333333332,
	"GLM-4.5-X":                             0.20454545454545456,
	"GLM-4.5-Air":                           0.15,
	"GLM-4.5-AirX":                          0.2,
	"GLM-4.5-Flash":                         0,
	"GLM-5V-Turbo":                          0.2,
	"GLM-4.6V":                              0.16666666666666666,
	"GLM-4.6V-FlashX":                       0.1,
	"GLM-4.6V-Flash":                        0,
	"GLM-4.5V":                              0.18333333333333332,
}

var defaultCreateCacheRatio = map[string]float64{
	"claude-3-sonnet-20240229":              1.25,
	"claude-3-opus-20240229":                1.25,
	"claude-3-haiku-20240307":               1.25,
	"claude-3-5-haiku-20241022":             1.25,
	"claude-haiku-4-5-20251001":             1.25,
	"claude-3-5-sonnet-20240620":            1.25,
	"claude-3-5-sonnet-20241022":            1.25,
	"claude-3-7-sonnet-20250219":            1.25,
	"claude-sonnet-4-20250514":              1.25,
	"claude-opus-4-20250514":                1.25,
	"claude-opus-4-1-20250805":              1.25,
	"claude-sonnet-4-5-20250929":            1.25,
	"claude-sonnet-4-6":                     1.25,
	"claude-opus-4-5-20251101":              1.25,
	"claude-opus-4-6":                       1.25,
	"claude-opus-4-7":                       1.25,
	"gpt-4o":                                0,
	"gpt-4o-mini":                           0,
	"chat-latest":                           0,
	"gpt-4.1":                               0,
	"gpt-4.1-mini":                          0,
	"gpt-4.1-nano":                          0,
	"gpt-5":                                 0,
	"gpt-5-2025-08-07":                      0,
	"gpt-5-chat-latest":                     0,
	"gpt-5-mini":                            0,
	"gpt-5-mini-2025-08-07":                 0,
	"gpt-5-nano":                            0,
	"gpt-5-nano-2025-08-07":                 0,
	"gpt-5.5":                               0,
	"gpt-5.5-2026-04-23":                    0,
	"gpt-5.5-pro":                           0,
	"gpt-5.5-pro-2026-04-23":                0,
	"gpt-5.4":                               0,
	"gpt-5.4-2026-03-05":                    0,
	"gpt-5.4-pro":                           0,
	"gpt-5.4-pro-2026-03-05":                0,
	"gpt-5.4-mini":                          0,
	"gpt-5.4-mini-2026-03-17":               0,
	"gpt-5.4-nano":                          0,
	"gpt-5.4-nano-2026-03-17":               0,
	"gpt-5.2":                               0,
	"gpt-5.2-chat-latest":                   0,
	"gpt-5.2-codex":                         0,
	"gpt-5.1":                               0,
	"gpt-5.1-chat-latest":                   0,
	"gpt-5.1-codex":                         0,
	"gpt-5.1-codex-max":                     0,
	"gpt-5.1-codex-mini":                    0,
	"gemini-2.5-pro":                        0,
	"gemini-2.5-flash":                      0,
	"gemini-2.5-flash-preview-09-2025":      0,
	"gemini-2.5-flash-lite":                 0,
	"gemini-2.5-flash-lite-preview-09-2025": 0,
	"gemini-3-pro-preview":                  0,
	"gemini-3-flash-preview":                0,
	"gemini-3.1-pro-preview":                0,
	"gemini-3.1-pro-preview-customtools":    0,
	"gemini-3.1-flash-lite-preview":         0,
	"gemini-3.1-flash-live-preview":         0,
	"gemini-3.1-flash-image-preview":        0,
	"deepseek-v4-flash":                     0,
	"deepseek-v4-pro":                       0,
	"grok-4.3":                              0,
	"grok-4.3-latest":                       0,
	"grok-latest":                           0,
	"grok-4.20":                             0,
	"grok-4.20-0309":                        0,
	"grok-4.20-multi-agent-0309":            0,
	"grok-4.20-multi-agent":                 0,
	"grok-4.20-0309-reasoning":              0,
	"grok-4.20-reasoning":                   0,
	"grok-4.20-0309-non-reasoning":          0,
	"grok-4.20-non-reasoning":               0,
	"GLM-5.1":                               0,
	"GLM-5":                                 0,
	"GLM-5-Turbo":                           0,
	"GLM-4.7":                               0,
	"GLM-4.7-FlashX":                        0,
	"GLM-4.7-Flash":                         0,
	"GLM-4.6":                               0,
	"GLM-4.5":                               0,
	"GLM-4.5-X":                             0,
	"GLM-4.5-Air":                           0,
	"GLM-4.5-AirX":                          0,
	"GLM-4.5-Flash":                         0,
	"GLM-5V-Turbo":                          0,
	"GLM-4.6V":                              0,
	"GLM-4.6V-FlashX":                       0,
	"GLM-4.6V-Flash":                        0,
	"GLM-4.5V":                              0,
}

//var defaultCreateCacheRatio = map[string]float64{}

var cacheRatioMap = types.NewRWMap[string, float64]()
var createCacheRatioMap = types.NewRWMap[string, float64]()

// GetCacheRatioMap returns a copy of the cache ratio map
func GetCacheRatioMap() map[string]float64 {
	return cacheRatioMap.ReadAll()
}

// CacheRatio2JSONString converts the cache ratio map to a JSON string
func CacheRatio2JSONString() string {
	return cacheRatioMap.MarshalJSONString()
}

// CreateCacheRatio2JSONString converts the create cache ratio map to a JSON string
func CreateCacheRatio2JSONString() string {
	return createCacheRatioMap.MarshalJSONString()
}

// UpdateCacheRatioByJSONString updates the cache ratio map from a JSON string
func UpdateCacheRatioByJSONString(jsonStr string) error {
	return types.LoadFromJsonStringWithCallback(cacheRatioMap, jsonStr, InvalidateExposedDataCache)
}

// UpdateCreateCacheRatioByJSONString updates the create cache ratio map from a JSON string
func UpdateCreateCacheRatioByJSONString(jsonStr string) error {
	return types.LoadFromJsonStringWithCallback(createCacheRatioMap, jsonStr, InvalidateExposedDataCache)
}

// GetCacheRatio returns the cache ratio for a model
func GetCacheRatio(name string) (float64, bool) {
	ratio, ok := cacheRatioMap.Get(name)
	if !ok {
		return 1, false // Default to 1 if not found
	}
	return ratio, true
}

func GetCreateCacheRatio(name string) (float64, bool) {
	ratio, ok := createCacheRatioMap.Get(name)
	if !ok {
		return 1.25, false // Default to 1.25 if not found
	}
	return ratio, true
}

func GetCacheRatioCopy() map[string]float64 {
	return cacheRatioMap.ReadAll()
}

func GetCreateCacheRatioCopy() map[string]float64 {
	return createCacheRatioMap.ReadAll()
}
