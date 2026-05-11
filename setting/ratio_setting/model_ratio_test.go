package ratio_setting

import (
	"math"
	"testing"
)

func assertApprox(t *testing.T, got, want float64) {
	t.Helper()
	if math.Abs(got-want) > 1e-9 {
		t.Fatalf("got %v, want %v", got, want)
	}
}

func TestLatestOfficialModelPricingRatios(t *testing.T) {
	InitRatioSettings()

	price, ok := GetModelPrice("gpt-5.2", false)
	if ok {
		t.Fatalf("gpt-5.2 should be ratio-priced, got fixed price %v", price)
	}
	ratio, ok, _ := GetModelRatio("gpt-5.2")
	if !ok {
		t.Fatal("gpt-5.2 ratio not found")
	}
	assertApprox(t, ratio, 0.875)

	completion := GetCompletionRatio("gpt-5.2")
	assertApprox(t, completion, 8)

	cache, ok := GetCacheRatio("gpt-5.2")
	if !ok {
		t.Fatal("gpt-5.2 cache ratio not found")
	}
	assertApprox(t, cache, 0.1)

	createCache, ok := GetCreateCacheRatio("gpt-5.2")
	if !ok {
		t.Fatal("gpt-5.2 create cache ratio not found")
	}
	assertApprox(t, createCache, 0)

	chatLatestRatio, ok, _ := GetModelRatio("chat-latest")
	if !ok {
		t.Fatal("chat-latest ratio not found")
	}
	assertApprox(t, chatLatestRatio, 2.5)
	assertApprox(t, GetCompletionRatio("chat-latest"), 6)
	chatLatestCache, ok := GetCacheRatio("chat-latest")
	if !ok {
		t.Fatal("chat-latest cache ratio not found")
	}
	assertApprox(t, chatLatestCache, 0.1)

	gpt55Ratio, ok, _ := GetModelRatio("gpt-5.5")
	if !ok {
		t.Fatal("gpt-5.5 ratio not found")
	}
	assertApprox(t, gpt55Ratio, 2.5)
	assertApprox(t, GetCompletionRatio("gpt-5.5"), 6)
	gpt55Cache, ok := GetCacheRatio("gpt-5.5")
	if !ok {
		t.Fatal("gpt-5.5 cache ratio not found")
	}
	assertApprox(t, gpt55Cache, 0.1)

	gpt54NanoRatio, ok, _ := GetModelRatio("gpt-5.4-nano")
	if !ok {
		t.Fatal("gpt-5.4-nano ratio not found")
	}
	assertApprox(t, gpt54NanoRatio, 0.1)
	assertApprox(t, GetCompletionRatio("gpt-5.4-nano"), 6.25)
	gpt54NanoCache, ok := GetCacheRatio("gpt-5.4-nano")
	if !ok {
		t.Fatal("gpt-5.4-nano cache ratio not found")
	}
	assertApprox(t, gpt54NanoCache, 0.1)

	gpt55ProRatio, ok, _ := GetModelRatio("gpt-5.5-pro")
	if !ok {
		t.Fatal("gpt-5.5-pro ratio not found")
	}
	assertApprox(t, gpt55ProRatio, 15)
	assertApprox(t, GetCompletionRatio("gpt-5.5-pro"), 6)
	gpt55ProCache, ok := GetCacheRatio("gpt-5.5-pro")
	if !ok {
		t.Fatal("gpt-5.5-pro cache ratio not found")
	}
	assertApprox(t, gpt55ProCache, 1)

	claudeSonnet46Ratio, ok, _ := GetModelRatio("claude-sonnet-4-6")
	if !ok {
		t.Fatal("claude-sonnet-4-6 ratio not found")
	}
	assertApprox(t, claudeSonnet46Ratio, 1.5)
	assertApprox(t, GetCompletionRatio("claude-sonnet-4-6"), 5)
	claudeSonnet46Cache, ok := GetCacheRatio("claude-sonnet-4-6")
	if !ok {
		t.Fatal("claude-sonnet-4-6 cache ratio not found")
	}
	assertApprox(t, claudeSonnet46Cache, 0.1)
	claudeSonnet46CreateCache, ok := GetCreateCacheRatio("claude-sonnet-4-6")
	if !ok {
		t.Fatal("claude-sonnet-4-6 create cache ratio not found")
	}
	assertApprox(t, claudeSonnet46CreateCache, 1.25)

	geminiRatio, ok, _ := GetModelRatio("gemini-3-flash-preview")
	if !ok {
		t.Fatal("gemini-3-flash-preview ratio not found")
	}
	assertApprox(t, geminiRatio, 0.25)
	assertApprox(t, GetCompletionRatio("gemini-3-flash-preview"), 6)
	geminiCache, ok := GetCacheRatio("gemini-3-flash-preview")
	if !ok {
		t.Fatal("gemini-3-flash-preview cache ratio not found")
	}
	assertApprox(t, geminiCache, 0.1)
	geminiCreateCache, ok := GetCreateCacheRatio("gemini-3-flash-preview")
	if !ok {
		t.Fatal("gemini-3-flash-preview create cache ratio not found")
	}
	assertApprox(t, geminiCreateCache, 0)

	gemini31Ratio, ok, _ := GetModelRatio("gemini-3.1-pro-preview")
	if !ok {
		t.Fatal("gemini-3.1-pro-preview ratio not found")
	}
	assertApprox(t, gemini31Ratio, 1)
	assertApprox(t, GetCompletionRatio("gemini-3.1-pro-preview"), 6)
	gemini31Cache, ok := GetCacheRatio("gemini-3.1-pro-preview")
	if !ok {
		t.Fatal("gemini-3.1-pro-preview cache ratio not found")
	}
	assertApprox(t, gemini31Cache, 0.1)

	deepseekRatio, ok, _ := GetModelRatio("deepseek-v4-flash")
	if !ok {
		t.Fatal("deepseek-v4-flash ratio not found")
	}
	assertApprox(t, deepseekRatio, 0.07)
	assertApprox(t, GetCompletionRatio("deepseek-v4-flash"), 2)
	deepseekCache, ok := GetCacheRatio("deepseek-v4-flash")
	if !ok {
		t.Fatal("deepseek-v4-flash cache ratio not found")
	}
	assertApprox(t, deepseekCache, 0.02)
	deepseekCreateCache, ok := GetCreateCacheRatio("deepseek-v4-flash")
	if !ok {
		t.Fatal("deepseek-v4-flash create cache ratio not found")
	}
	assertApprox(t, deepseekCreateCache, 0)

	deepseekProRatio, ok, _ := GetModelRatio("deepseek-v4-pro")
	if !ok {
		t.Fatal("deepseek-v4-pro ratio not found")
	}
	assertApprox(t, deepseekProRatio, 0.2175)
	assertApprox(t, GetCompletionRatio("deepseek-v4-pro"), 2)
	deepseekProCache, ok := GetCacheRatio("deepseek-v4-pro")
	if !ok {
		t.Fatal("deepseek-v4-pro cache ratio not found")
	}
	assertApprox(t, deepseekProCache, 0.008333333333333333)

	grokRatio, ok, _ := GetModelRatio("grok-4.3")
	if !ok {
		t.Fatal("grok-4.3 ratio not found")
	}
	assertApprox(t, grokRatio, 0.625)
	assertApprox(t, GetCompletionRatio("grok-4.3"), 2)
	grokCache, ok := GetCacheRatio("grok-4.3")
	if !ok {
		t.Fatal("grok-4.3 cache ratio not found")
	}
	assertApprox(t, grokCache, 0.16)
	grokCreateCache, ok := GetCreateCacheRatio("grok-4.3")
	if !ok {
		t.Fatal("grok-4.3 create cache ratio not found")
	}
	assertApprox(t, grokCreateCache, 0)

	grok420Ratio, ok, _ := GetModelRatio("grok-4.20")
	if !ok {
		t.Fatal("grok-4.20 ratio not found")
	}
	assertApprox(t, grok420Ratio, 0.625)
	assertApprox(t, GetCompletionRatio("grok-4.20"), 2)

	glmRatio, ok, _ := GetModelRatio("GLM-5.1")
	if !ok {
		t.Fatal("GLM-5.1 ratio not found")
	}
	assertApprox(t, glmRatio, 0.7)
	assertApprox(t, GetCompletionRatio("GLM-5.1"), 3.142857142857143)
	glmCache, ok := GetCacheRatio("GLM-5.1")
	if !ok {
		t.Fatal("GLM-5.1 cache ratio not found")
	}
	assertApprox(t, glmCache, 0.18571428571428572)
	glmCreateCache, ok := GetCreateCacheRatio("GLM-5.1")
	if !ok {
		t.Fatal("GLM-5.1 create cache ratio not found")
	}
	assertApprox(t, glmCreateCache, 0)

	glmVisionRatio, ok, _ := GetModelRatio("GLM-5V-Turbo")
	if !ok {
		t.Fatal("GLM-5V-Turbo ratio not found")
	}
	assertApprox(t, glmVisionRatio, 0.6)
	assertApprox(t, GetCompletionRatio("GLM-5V-Turbo"), 3.3333333333333335)
	glmVisionCache, ok := GetCacheRatio("GLM-5V-Turbo")
	if !ok {
		t.Fatal("GLM-5V-Turbo cache ratio not found")
	}
	assertApprox(t, glmVisionCache, 0.2)
}

func TestDefaultPricingUsesOfficialModelNames(t *testing.T) {
	InitRatioSettings()

	for _, name := range []string{
		"claude-opus-4-7-low",
		"claude-opus-4-7-xhigh",
		"claude-opus-4-6-max",
		"claude-3-7-sonnet-20250219-thinking",
		"o3-mini-high",
		"gemini-2.5-flash-thinking-*",
	} {
		if _, ok := GetDefaultModelRatioMap()[name]; ok {
			t.Fatalf("non-official model ratio should not be configured: %s", name)
		}
		if _, ok := GetCacheRatio(name); ok {
			t.Fatalf("non-official cache ratio should not be configured: %s", name)
		}
		if _, ok := GetCreateCacheRatio(name); ok {
			t.Fatalf("non-official create cache ratio should not be configured: %s", name)
		}
	}
}
